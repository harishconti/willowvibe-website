import os
import time
from playwright.sync_api import sync_playwright

BASE_URL = "http://localhost:3000/willowvibe-website"
SCREENSHOT_DIR = "tests/e2e/screenshots"

def ensure_dir(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

def test_frontend():
    ensure_dir(SCREENSHOT_DIR)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        # Desktop context
        context = browser.new_context(
            viewport={"width": 1280, "height": 720}
        )
        page = context.new_page()

        # Define pages to test
        pages = [
            {"path": "/", "name": "home"},
            {"path": "/services/", "name": "services"},
            {"path": "/ai-solutions/", "name": "ai-solutions"},
            {"path": "/work/", "name": "work"},
            {"path": "/process/", "name": "process"},
            {"path": "/pricing/", "name": "pricing"},
            {"path": "/technology/", "name": "technology"},
            {"path": "/blog/", "name": "blog"},
            {"path": "/about/", "name": "about"},
            {"path": "/contact/", "name": "contact"},
            {"path": "/resources/saas-guide/", "name": "saas-guide"},
        ]

        issues = []
        print("Starting Test Suite...")

        # 1. Page Navigation and Screenshot Tests
        for page_info in pages:
            url = f"{BASE_URL}{page_info['path']}"
            print(f"Testing {url}...")
            try:
                response = page.goto(url, timeout=30000)
                if not response:
                     issues.append(f"Error: {url} returned no response")
                     continue

                if response.status != 200:
                     issues.append(f"Error: {url} returned status {response.status}")

                # Check for console errors (simple hook)
                # Note: This is transient, proper capture needs event listener attached before navigation

                # Wait for content to load
                try:
                    page.wait_for_load_state("networkidle", timeout=10000)
                except Exception:
                    print(f"Timeout waiting for networkidle on {url}, proceeding...")

                # Take screenshot
                screenshot_path = f"{SCREENSHOT_DIR}/{page_info['name']}.png"
                page.screenshot(path=screenshot_path, full_page=True)
                print(f"Captured {screenshot_path}")

            except Exception as e:
                issues.append(f"Exception testing {url}: {str(e)}")

        # 2. Functional Tests

        # Test Contact Form (Visibility)
        print("Testing Contact Form...")
        try:
            page.goto(f"{BASE_URL}/contact/")
            if page.get_by_role("button", name="Send Message").is_visible():
                print("Contact form submit button is visible.")
            else:
                issues.append("Contact form submit button NOT found.")
        except Exception as e:
             issues.append(f"Contact form test failed: {e}")

        # Test Blog Filter
        print("Testing Blog Page...")
        try:
            page.goto(f"{BASE_URL}/blog/")
            search_input = page.get_by_placeholder("Search articles...")
            if search_input.is_visible():
                search_input.fill("Guide")
                page.wait_for_timeout(1000)
                page.screenshot(path=f"{SCREENSHOT_DIR}/blog_search.png")
                print("Blog search tested.")
            else:
                print("Blog search input not found (might be no posts or different selector).")
        except Exception as e:
             issues.append(f"Blog test failed: {e}")

        # 3. Mobile Responsiveness Test
        print("Testing Mobile View...")
        context_mobile = browser.new_context(viewport={"width": 375, "height": 667})
        page_mobile = context_mobile.new_page()
        try:
            page_mobile.goto(f"{BASE_URL}/")

            # Locate menu button by aria-label
            # Note: aria-label="Open main menu" is on the button itself.
            # Using get_by_label should work if accessibility tree is correct.
            # Alternatively use role="button" with name="Open main menu".

            menu_btn = page_mobile.get_by_role("button", name="Open main menu")

            if menu_btn.is_visible():
                menu_btn.click()
                page_mobile.wait_for_timeout(1000) # wait for animation/rendering
                page_mobile.screenshot(path=f"{SCREENSHOT_DIR}/mobile_menu_open.png")
                print("Mobile menu opened and captured.")

                # Verify menu items are visible
                if page_mobile.get_by_text("Services").is_visible():
                    print("Mobile menu items visible.")
                else:
                     issues.append("Mobile menu items NOT visible after click.")
            else:
                 issues.append("Mobile menu button not found.")
        except Exception as e:
            issues.append(f"Mobile test failed: {str(e)}")

        browser.close()

        print("\nTest Suite Completed.")
        if issues:
            print("\nIssues Found:")
            for issue in issues:
                print(f"- {issue}")
        else:
            print("\nNo major execution issues found.")

if __name__ == "__main__":
    test_frontend()
