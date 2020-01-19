using ApplicationCore.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationCore.Interfaces
{
    public interface IAtividades
    {
        int Cadastrar(Atividades atividade);

        List<Atividades> Listar();

        void Deletar(int id);

        void Alterar(Atividades atividade);
    }
}
