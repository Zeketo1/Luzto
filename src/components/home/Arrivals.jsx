import { useContext, useState } from "react";
import { arrivalFilter } from "./products";
import Button from "../../utils/Button";
import { Link } from "react-router-dom";
import { LuzContext } from "../../Context/LuzContextProvider";

const Arrivals = () => {
    const { setInShop } = useContext(LuzContext);
    const arrivalsMenFashion = arrivalFilter.filter(
        (item) => item.type == "male"
    );
    const arrivalsWomenFashion = arrivalFilter.filter(
        (item) => item.type == "female"
    );
    const arrivalsWomenAccessories = arrivalFilter.filter(
        (item) => item.type == "arrivalsWomenAccessories"
    );
    const arrivalsMenAccessories = arrivalFilter.filter(
        (item) => item.type == "arrivalsMenAccessories"
    );
    const arrivalsDiscount = arrivalFilter.filter(
        (item) => item.type == "arrivalsDiscount"
    );

    const categoryOptions = [
        { name: "Men's Fashion", details: arrivalsMenFashion },
        { name: "Women's Fashion", details: arrivalsWomenFashion },
        { name: "Women Accessories", details: arrivalsWomenAccessories },
        { name: "Men Accessories", details: arrivalsMenAccessories },
        { name: "Discount Deals", details: arrivalsDiscount },
    ];

    const [active, setActive] = useState(0);

    const [categorySelector, setCategorySelector] =
        useState(arrivalsMenFashion);

    return (
        <>
            <div className="bg-white flex flex-col gap-10 pt-[50px] pb-3">
                <div className="flex flex-col gap-3">
                    <h1 className="text-center text-[28px] font-serif">
                        New Arrivals
                    </h1>
                    <div className="text-center opacity-70">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Scelerisque duis <br /> ultrices sollicitudin aliquam
                        sem. Scelerisque duis ultrices sollicitudin
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    {categoryOptions.map(({ name, details }, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setCategorySelector(details), setActive(i);
                            }}
                            className={`py-2 px-5 ${
                                i == active
                                    ? "bg-black text-white"
                                    : "bg-[#FAFAFA] text-black"
                            } rounded-[5px] shadow-md cursor-pointer`}
                        >
                            {name}
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-7">
                    <div className="p-7 rounded-[5px] grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-fit">
                        {categorySelector.map(
                            (
                                {
                                    image,
                                    name,
                                    review,
                                    price,
                                    statues,
                                    star,
                                    color,
                                },
                                i
                            ) => (
                                <Link
                                    to={`/shop/${name}`}
                                    key={i}
                                    className="product__shadow px-4 py-4 bg-white w-[300px] flex flex-col gap-3 rounded-[10px]"
                                    onClick={() => setInShop(false)}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backgroundRepeat: "no-repeat",
                                        }}
                                        alt=""
                                        className="h-[200px] w-[280px] rounded-[7px]"
                                    />
                                    <div>
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3>{name}</h3>
                                                <p className="text-[12px] opacity-70">
                                                    AI Karam
                                                </p>
                                            </div>
                                            <img
                                                src={star}
                                                alt=""
                                                className="h-[17px]"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-[15px] font-mono">
                                        ({review}) Customer Reviews
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-semibold">
                                            ${price}
                                        </p>
                                        <p
                                            className={`text-[13px] ${
                                                color && `text-${color}-900`
                                            }`}
                                        >
                                            {statues}
                                        </p>
                                    </div>
                                </Link>
                            )
                        )}
                    </div>
                    <Button text="View More" />
                </div>
            </div>
        </>
    );
};

export default Arrivals;
