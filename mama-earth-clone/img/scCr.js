const data = JSON.parse(localStorage.getItem("mamaEarthProducts")) || [];
const itemCarousel = document.getElementById("itemCarousel");
data.map((item) => {
    createCard(
      item.title,
      item.imgUrl[0],
      item.category,
      item.price,
      item.id,
      item.rating,
      1
    );
    });
    function createCard(
        title,
        imgUrl,
        category,
        price,
        id,
        rating,
        selectItem
      ) {
        const div = document.createElement("div");
        div.setAttribute("class", "myCard card card-1");
        div.innerHTML = `<img
                      src="${imgUrl}"
                      alt=""
                    />
                    <p>
                     ${title}
                    </p>
                    <span></span>
                    <p>
                      <span id="price">&#8377; 690</span>
                      <span id="actualPrice">&#8377; ${price}</span> |
                      <span id="offer">(3% off)</span>
                    </p>
                    <button>Add To Cart</button>
                  `;
        if (selectItem == 1) {
          itemCarousel.append(div);
        }
        console.log(selectItem);
    }
        $("#itemCarousel").owlCarousel({
            margin: 20,
            loop: false,
            autoplay: false,
            responsive: {
              1000: {
                items: 3,
                nav: true,
              },
            },
          });