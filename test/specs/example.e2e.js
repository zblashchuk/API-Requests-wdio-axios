import LoginPage from '../pageobjects/login.page.js'
import RandomApiPage from '../pageobjects/random-api.page.js'
import axios from 'axios';
import allure from 'allure-commandline'
import allureReporter from '@wdio/allure-reporter'
//Send get rundom joke api request 
const joke1= await RandomApiPage.getRandomJoke()
const joke2 = await RandomApiPage.getRandomJoke()
const loginData = await RandomApiPage.postLogin()
describe('Api examples', () => {
  it('should Verify status codes 200', async () => {
  
    expect(joke1.status).toEqual(200)
    expect(joke2.status).toEqual(200)
    allureReporter.addAttachment("Responce code: ", joke1.status);
})
  it('should get different joke every request', async () => {

    //Verify user get different joke every request
    expect(joke1.data.value).not.toEqual(joke2.data.value)
    allureReporter.addAttachment("Random Joke1: ", joke1.data.value);
    allureReporter.addAttachment("Random Joke2: ", joke2.data.value);
})

it("User Login succesful", async () => {
 
  expect(loginData.status).toEqual(201)
  allureReporter.addAttachment("Login Status: ", loginData.status);
})
it("User Login data check request", async () => {
  const data = { firstName: 'John', secondName: 'Doe', email: 'jd@gmail.com' }
  console.log(loginData.data)
  expect(loginData.data.email).toHaveTextContaining(data.email)
  expect(loginData.data.email).toHaveTextContaining(data.firstName)
  expect(loginData.data.email).toHaveTextContaining(data.secondName)
  allureReporter.addAttachment("Response data: ", loginData.data);
})
})