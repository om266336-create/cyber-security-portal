import asyncio
from playwright.async_api import async_playwright

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        await page.goto("http://localhost:8000")
        print("Navigated to localhost:8000")
        await page.wait_for_timeout(500)
        
        # Click the Explore Labs button
        await page.click("text=Explore Labs")
        print("Clicked Explore Labs")
        await page.wait_for_timeout(500)
        
        # Check URL hash and visible sections
        url = page.url
        print(f"URL is {url}")
        
        visible_sections = await page.evaluate('''() => {
            const sections = document.querySelectorAll('.page-section.active');
            return Array.from(sections).map(s => s.id);
        }''')
        print(f"Visible sections: {visible_sections}")
        await browser.close()

asyncio.run(run())
