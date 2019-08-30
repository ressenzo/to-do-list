﻿using Entity.Entitties;
using Repository.Interfaces;
using Repository.Repositoryies;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Api.Controllers
{
    public class AtividadeController : ApiController
    {
        readonly IAtividade _atividade;

        public AtividadeController(IAtividade atividade)
        {
            _atividade = atividade;
        }

        [HttpGet]
        public IHttpActionResult Get()
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
            _atividade.Cadastrar(atividade);

            object confirmacao = new
            {
                resultado = true
            };

            return Ok(confirmacao);
        }
    }
}
