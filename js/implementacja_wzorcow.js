/*class MidPrice{
    name = 'mid';
    price = 50;
    brandManager = 'Maciej Nowak';
    display = function(){
        return document.write(`<br>osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`);
    }
}

class AAAPrice{
    name = 'aaa price';
    price = 250;
    brandManager = 'Marianna Srebrna';
    company = ['EA', 'Microsoft'];
    display = function(){
        return document.write(`<br>osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`);
    }
}

class BasePrice
{
    name = "base";
    price = 20;
    brandManager = "Anna Marys";
    display()
    {
        return document.write(`<br>${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
    }
    GetPrice()
    {

    }
}

function games(){
    let games = [];
    games.push(new MidPrice());
    games.push(new AAAPrice());
    games.push(new BasePrice());

    for (let i=0;i<games.length; i++)
        games[i].display();
}

document.write(games());
*/

class MidPrice{
    name = 'mid';
    price = 50;
    brandManager = 'Maciej Nowak';
    display = function(){
        return document.write(`<br>osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`);
    }
}

class AAAPrice{
    name = 'aaa price';
    price = 250;
    brandManager = 'Marianna Srebrna';
    company = ['EA', 'Microsoft'];
    display = function(){
        return document.write(`<br>osoba odpowiedzialna za segment ${this.name} to ${this.brandManager} (cena sugerowana to: ${this.price})`);
    }
}

class BasePrice
{
    name = "base";
    price = 20;
    brandManager = "Anna Marys";
    display()
    {
        return document.write(`<br>${this.brandManager} is responsible for ${this.name} (the suggested price is ${this.price})`);
    }
    GetPrice()
    {

    }
}

class PriceGameTypeFactory
{
    createGamePriceType(type) {
        let priceType;
        if (type === "baseprice") {
            priceType = new BasePrice();
        } else if (type === "midprice") {
            priceType = new MidPrice();
        } else if (type === "aaaprice") {
            priceType = new AAAPrice();
        }
        priceType.display = function()
        {
            return document.write(`${this.BrandManager} is responsible for ${this.Name} (the suggested price is ${this.Price})`);
        }
        return priceType;
    }



}
function GamesFactory()
{
    let games=[];
    let gameFactory = new PriceGameTypeFactory();
    let aaaPrice = gameFactory.createGamePriceType("aaaprice");

    games.push(aaaPrice);
    games.push(gameFactory.createGamePriceType("baseprice"));
    games.push(gameFactory.createGamePriceType("midprice"));
    games.push(gameFactory.createGamePriceType("baseprice"));

    for (let i = 0; i < games.length; i++)
    {
        games[i].display();
        document.write("<br>");
    }
}
GamesFactory();