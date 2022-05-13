const { Builder, By, Key } = require("selenium-webdriver");
const url = "http://localhost:3000";


describe("selenium tests",  () => {

  let driver;

  beforeAll(async () => {
    driver = await new Builder().forBrowser("firefox").build();
    await driver.get(url);
  })
   
  afterAll(async () => {
      await driver.quit();
  })

  test("renders login page as default", async () => {
    const eventsURL = await driver.getCurrentUrl();
    expect(eventsURL).toEqual('http://localhost:3000/login'); 
  })

  test("renders Home page when clicked on Home nav button", async () => {
    await driver.findElement(By.name("home")).click();
    const eventsURL = await driver.getCurrentUrl();
    expect(eventsURL).toEqual('http://localhost:3000/home'); 
  })

  test("renders register page when clicked on register nav button", async () => {
    await driver.findElement(By.name("register")).click();
    const eventsURL = await driver.getCurrentUrl();
    expect(eventsURL).toEqual('http://localhost:3000/register'); 
  })

  test("renders an error for an non-matching password regitsration", async () => {
    await driver.findElement(By.name("firstName")).sendKeys("gopinath", Key.RETURN);
    await driver.findElement(By.name("lastName")).sendKeys("gangisetti", Key.RETURN);
    await driver.findElement(By.name("phone")).sendKeys("111-222-3333", Key.RETURN);
    await driver.findElement(By.name("address")).sendKeys("omaha", Key.RETURN);
    await driver.findElement(By.name("email")).sendKeys("gopinath.gangisetti@gmail.com", Key.RETURN);
    await driver.findElement(By.name("password1")).sendKeys("oiwcpassword1", Key.RETURN);
    await driver.findElement(By.name("password2")).sendKeys("oiwcpassword2", Key.RETURN);
    await driver.findElement(By.name("submit")).click();

    const error = await driver.findElement(By.name("error")).getText();

    expect(error).toEqual('Passwords do not match!'); 
  })

  test("renders events page after successful login!", async () => {
      await driver.findElement(By.name("login")).click();
      await driver.findElement(By.name("email")).sendKeys("gopinath.gangisetti@gmail.com", Key.RETURN);
      await driver.findElement(By.name("password")).sendKeys("oiwc1234", Key.RETURN);
      await driver.findElement(By.name("submit")).click();

      const eventsURL = await driver.getCurrentUrl();
      expect(eventsURL).toEqual('http://localhost:3000/events'); 

  })

})
