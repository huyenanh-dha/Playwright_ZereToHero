import {Locator, Page} from '@playwright/test'
import { HelperBase } from './helper-base'

export class NavigationPage extends HelperBase{
    readonly formLayoutsMenu: Locator
    readonly datePickerMenu: Locator
    readonly toasterMenu: Locator
    readonly tooltipMenu: Locator
    readonly smartTableMenu: Locator

    constructor(page: Page){
        super(page)
        this.smartTableMenu = page.getByText('Smart Table')
        this.toasterMenu = page.getByText('Toastr')
        this.tooltipMenu = page.getByText('Tooltip')
        this.datePickerMenu = page.getByText('Datepicker')
        this.formLayoutsMenu = page.getByText('Form Layouts')
    }

    async formLayoutsPage(){
        await this.selectGroupMenuItem('Forms')
        await this.formLayoutsMenu.click()
        const toastMessage = await this.getToastrMessage()
        console.log(toastMessage)
    }

    async datePickerPage(){
        await this.selectGroupMenuItem('Forms')
        await this.datePickerMenu.click()
    }

    async toasterPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.toasterMenu.click()
    }

    async tooltipPage(){
        await this.selectGroupMenuItem('Modal & Overlays')
        await this.tooltipMenu.click()
    }

    async smartTablePage(){
        await this.selectGroupMenuItem('Tables & Data')
        await this.smartTableMenu.click()
    }

    private async selectGroupMenuItem(groupMenuTitle: string){
        const groupMenuItem = this.page.getByTitle(groupMenuTitle)
        const expandedState = await groupMenuItem.getAttribute('aria-expanded')
        if(expandedState == "false"){
            await groupMenuItem.click()
        }
    }
}
