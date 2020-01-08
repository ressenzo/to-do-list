using Entity.Entitties;
using Repository.Interfaces;
using System.Web.Http;

namespace Api.Controllers
{
    public class AtividadesController : ApiController
    {
        readonly IAtividade _atividade;

        public AtividadesController(IAtividade atividade)
        {
            _atividade = atividade;
        }

        [HttpGet]
        public IHttpActionResult ObterTodos()
        {
            var atividades = _atividade.Listar();

            return Ok(atividades);
        }

        [HttpDelete]
        public IHttpActionResult Deletar(int id)
        {
            _atividade.Deletar(id);

            object confirmacao = new
            {
                resultado = true
            };

            return Ok(confirmacao);
        }

        [HttpPost]
        public IHttpActionResult Cadastrar(AtividadeEntity atividade)
        {
            var idAtividade = _atividade.Cadastrar(atividade);

            object confirmacao = new
            {
                resultado = true,
                id = idAtividade
            };

            return Ok(confirmacao);
        }

        [HttpPut]
        public IHttpActionResult Alterar(AtividadeEntity atividade)
        {
            _atividade.Alterar(atividade);

            object confirmacao = new
            {
                resultado = true
            };

            return Ok(confirmacao);
        }
    }
}
