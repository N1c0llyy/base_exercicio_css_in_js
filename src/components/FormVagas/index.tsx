import { FormContainer, BotaoPesquisar, Campo } from './styles'

const FormVagas = () => {
  return (
    <FormContainer>
      <Campo type="text" placeholder="Buscar vaga" />
      <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
    </FormContainer>
  )
}

export default FormVagas