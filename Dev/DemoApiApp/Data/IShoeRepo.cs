using DemoApiApp.Models;

namespace DemoApiApp.Data
{
    public interface IShoeRepo
    {
        IEnumerable<Shoe> GetShoes();
        Shoe GetShoeById(int id);


    }

}