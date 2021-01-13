package superhero.utility;

import java.util.Collections;
import java.util.HashMap;
import java.util.concurrent.TimeUnit;

import cucumber.api.java.After;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;

import cucumber.api.java.Before;

public class Hook {

	public static WebDriver driver;

	private final ConfigFileReader configFileReader = ConfigFileReader.get();
	private final String webSite = configFileReader.getPropertyValue("applicationUrl");
	private final String pathDriver = configFileReader.getPropertyValue("webdriver.chrome.path");

	@Before
	public void setUp(cucumber.api.Scenario scenario) throws InterruptedException {
		System.out.println("00000");
		configFileReader.addConfig("config/config.properties");
		System.out.println("111111");

		System.out.println("pathDriver==>" + pathDriver);
		if (driver == null) {

			System.setProperty("webdriver.chrome.driver", pathDriver);

			DesiredCapabilities capabilities = DesiredCapabilities.chrome();
			capabilities.setBrowserName("chrome");
			HashMap<String, Object> chromePerfs = new HashMap<>();
			chromePerfs.put("profile.default_content_settings.popups", 0);
			chromePerfs.put("intl.accept_languages", "fr");

			chromePerfs.put("download.prompt_for_download", false);

			ChromeOptions chromeOpt = new ChromeOptions();
			chromeOpt.setExperimentalOption("useAutomationExtension", false);
			//chromeOpt.setExperimentalOption("excludeSwitches", Collections.singletonList("enable-automation"));
			chromeOpt.setExperimentalOption("prefs", chromePerfs);
			
			chromeOpt.addArguments("--disable-extensions");
			
			//chromeOpt.addArguments("--incognito");

			driver = new ChromeDriver(chromeOpt);
			// driver = new ChromeDriver();

			driver.manage().window().maximize();

			driver.get(webSite);
			// System.out.println("webSite=>" + webSite);
			driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
			Thread.sleep(5000);

		}
		// windowParent = driver.getWindowHandle();

	}

	// @After
	public static void tearDown(cucumber.api.Scenario scenario) {
		// System.out.println("@AfterClass");
		// driver.close();
		driver.quit();

	}

}
