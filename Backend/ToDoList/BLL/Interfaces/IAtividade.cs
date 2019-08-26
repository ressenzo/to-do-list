﻿using DTO.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IAtividade
    {
        List<AtividadeDto> Listar();

        void Deletar(int id);

        void Cadastrar(AtividadeDto atividade);
    }
}
