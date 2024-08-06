const {validatePassword, confirmAge, onSubmit}= require('./tests')

it('Regra e validação de senha',()=>{
    expect(validatePassword('pri*','pri*')).toBe(true)
})

it('Bloqueio por idade',()=>{
    expect(confirmAge(19)).toBe(true)
})


it('Feedback envio',()=>{
    expect(onSubmit('pri','pri*',19)).toBe(false)
})
