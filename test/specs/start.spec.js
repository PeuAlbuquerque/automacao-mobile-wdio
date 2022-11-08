const formsScreen = require("../screens/forms.screen");

describe('Funcionalidade página Forms', () => {
    it('preencher o menu forms', async() => {
        
        await formsScreen.goToForms()
        await formsScreen.preencherInput()
        await formsScreen.setSwitch()
        await formsScreen.setDropDown()
        await formsScreen.setActive()
        
        expect (await formsScreen.formComponentsName()).toEqual('This button is')
    });
});