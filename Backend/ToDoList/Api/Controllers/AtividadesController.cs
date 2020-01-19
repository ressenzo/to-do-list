using ApplicationCore.Interfaces;
using System.Web.Http;
using ApplicationCore.Entities;

namespace Api.Controllers
{
    public class AtividadesController : ApiController
    {
        readonly IAtividades _atividade;

        public AtividadesController(IAtividades atividade)
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
        public IHttpActionResult Cadastrar(Atividades atividade)
        {
            var idAtividade = _atividade.Cadastrar(atividade);

            object confirmacao = new
            {
                resultado = true,
                id = idAtividade
            };

            return Ok(confirmacao);
        }

        [HttpPatch]
        public IHttpActionResult Alterar(Atividades atividade)
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
