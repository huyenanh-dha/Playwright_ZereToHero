import { Page } from '@playwright/test'
import { NavigationPage } from './navigation-page'
import { FormLayoutsPage } from './form-layouts-page'
import { DatepickerPage } from './datepicker-page'

export class PageManager {

    private readonly page: Page
    readonly navigateTo: NavigationPage
    readonly formLayoutsPage: FormLayoutsPage
    readonly datepickerPage: DatepickerPage

    constructor(page: Page){
        this.page = page
        this.navigateTo = new NavigationPage(page)
        this.formLayoutsPage = new FormLayoutsPage(page)
        this.datepickerPage = new DatepickerPage(page)
    }
}
