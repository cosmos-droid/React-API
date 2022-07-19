using DemoApiApp.Models;

namespace DemoApiApp.Data
{
    public class MockShoeRepo : IShoeRepo
    {
        public Shoe GetShoeById(int id)
        {

            return new Shoe { Id = 0, ShoeSize = 45, shoeAdress = "AB", isRight = true };

        }

        public IEnumerable<Shoe> GetShoes()
        {
            var shoes = new List<Shoe>
            {
             new Shoe{Id = 0,ShoeSize = 45,shoeAdress = "AB",isRight = true},
             new Shoe{Id = 1,ShoeSize = 46,shoeAdress = "AS",isRight = false}

            };

            return shoes;

        }



    }
}

