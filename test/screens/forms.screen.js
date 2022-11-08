class FormsScreen {

    get #forms() { return $('~Forms') }

    get #inputField() { return $('~text-input') }

    get #switch() { return $('~switch') }

    get #dropDown() { return $('~Dropdown') }

    get #formCompoents() {return $('android.widget.TextView')}

    async goToForms() {
        await this.#forms.click()
    }

    async preencherInput() {
        await this.#inputField.setValue('teste')
    }

    async setSwitch() {
        await this.#switch.click()
    }

    async setDropDown() {
        await this.#dropDown.click()
        const selector = 'new UiSelector().text("This app is awesome").className("android.widget.CheckedTextView")'
        const button = await $(`android=${selector}`)
        await button.click()
    }

    async setActive() {
        await driver.execute('mobile: scroll', { direction: 'down', strategy: 'accessibility id', selector: '~button-Active' })
        await $('~button-Active').click()
    }

    async formComponentsName() {
        return await this.#formCompoents.getText() 
    }

}

module.exports = new FormsScreen 