function myfunction()
{
    var text ;
    var item_name = prompt("ENTER ITEM NAME: ", "Enter Item number");
    switch(item_name)
    {
        case "1":
            text = "Item Name: Green Moong || ID = 1C2540 || RATE = Rs. 100.46/kg";
            text.fontsize("10");
            break;
        case "2":
            text = "Item Name: Urad Dal || ID = 1F9872 || RATE = Rs. 104.25/kg";
            break;
        case "3":
            text = "Item Name: Masoor Dal|| ID = 1D8410 || RATE = Rs. 155.00/kg";
            break;
        case "4":
            text = "Item Name: Toor Dal|| ID = 1E6026 || RATE = Rs. 90.99/kg";
            break;
        case "5":
            text = "Item Name: Cheakpea || ID = 1A7994 || RATE = Rs. 80.75/kg";
            break;
        case "6":
            text = "Item Name: Horsegram || ID = 1Q8345 || RATE = Rs. 105.50/kg";
            break;
        case "7":
           text = "Item Name: Matar Dal || ID = 1Z4349 || RATE = Rs. 120.45/kg";
            break;
        default:
            text = "WRONG !! Please enter a valid Item number......!!"
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo").style.textAlign = "center";
    document.getElementById("demo").style.fontSize = "x-large";
}