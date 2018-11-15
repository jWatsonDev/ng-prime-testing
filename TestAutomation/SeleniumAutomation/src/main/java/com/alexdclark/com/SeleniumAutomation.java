package com.alexdclark.com;

import java.util.Scanner;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.DesiredCapabilities;
import java.util.List;
import org.openqa.selenium.*;

public class SeleniumAutomation {

	static ChromeOptions chromeOptions = new ChromeOptions();

	// Headless Toggle
	static boolean headlessToggle = false;

	public static String getArgs(boolean headlessOption) {
		if (headlessOption) {
			return "--headless";
		}

		else {
			return "--start-maximized";
		}
	}
	
	public static void main(String[] args) throws Exception {

		//getWeather();
		ngPrime();
	}


	@Test
	public static void getWeather() {
		// Determining arguments for Chrome Driver
		chromeOptions.addArguments(getArgs(headlessToggle));

		// Declaring Desired Capabilities of Remote Web Driver (Pulling in Chrome
		// Options variables to determine Headless or Not)
		DesiredCapabilities desiredCap = DesiredCapabilities.chrome();
		desiredCap.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

		// WebDriver Headless/Non-Headless
		WebDriver driver = new ChromeDriver(chromeOptions);

		// Remote WebDriver (Can't run headless)
		// WebDriver driver = new RemoteWebDriver(new
		// URL("http://10.247.191.250:4444/wd/hub"),desiredCap);

		// Getting User Input then closing Scanner:
		Scanner userInput = new Scanner(System.in);
		System.out.println("What city would you like the weaather of?");
		String userInputTemp = userInput.nextLine();
		userInput.close();

		// Navigating to Google and searching for weather for city entered by user
		driver.get("http://www.google.com");
		driver.findElement(By.name("q")).sendKeys(userInputTemp + " Weather", Keys.RETURN);

		// Storing weather attributes (Temp and Wind)
		String currentTemp = driver.findElement(By.id("wob_tm")).getText().toString();
		String currentWind = driver.findElement(By.id("wob_ws")).getText().toString();
		String currentCity = driver.findElement(By.id("wob_loc")).getText().toString();

		// Closing the Web Driver
		driver.close();

		// System.out.println("The current Temperature in " + userInputTemp + " is: " +
		// currentTemp + " and the current wind speed is: " + currentWind);
		System.out.println("*** " + currentCity + " Weather Report ***");
		System.out.println("Temp: " + currentTemp);
		System.out.println("Wind Spped: " + currentWind);
	}

	public static void sleepTime(int sleep){
		try {
            Thread.sleep((sleep));
        } catch (InterruptedException e) {
        }
	}

	public static void ngPrime(){
		// Determining arguments for Chrome Driver
		chromeOptions.addArguments(getArgs(headlessToggle));

		// Declaring Desired Capabilities of Remote Web Driver (Pulling in Chrome
		// Options variables to determine Headless or Not)
		DesiredCapabilities desiredCap = DesiredCapabilities.chrome();
		desiredCap.setCapability(ChromeOptions.CAPABILITY, chromeOptions);

		// WebDriver Headless/Non-Headless
		WebDriver driver = new ChromeDriver(chromeOptions);
		driver.get(("http://localhost:4200"));

		List <WebElement> tableColumns = driver.findElements(By.className("ui-sortable-column"));

		sleepTime(1000);

		driver.findElement(By.xpath("/html/body/app-root/app-prime/p-table[1]/div/div/table/thead/tr/th[1]")).click();
	
		sleepTime(1000);

		driver.findElement(By.xpath("/html/body/app-root/app-prime/p-table[1]/div/div/table/thead/tr/th[2]")).click();
	
		sleepTime(1000);
		
		driver.findElement(By.xpath("/html/body/app-root/app-prime/p-table[1]/div/div/table/thead/tr/th[3]")).click();
	

		/*for (WebElement tempEle : tableColumns){

			tempEle.click();

		}*/


		//ui-sortable-column 
		// Remote WebDriver (Can't run headless)
		// WebDriver driver = new RemoteWebDriver(new
		// URL("http://10.247.191.250:4444/wd/hub"),desiredCap);
	}
}
