using Entity.Entitties;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Interfaces
{
    public interface IAtividade
    {
        void Cadastrar(AtividadeEntity atividade);

        List<AtividadeEntity> Listar();

        void Deletar(int id);
    }
}
