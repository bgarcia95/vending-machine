import { useDispatch } from "react-redux";

import { Card, Box, Button, Label, Image } from "./common";
import { Timer } from "./";
import { productStatusHandler } from "../redux/slices/productsSlice";

const Product = ({ product, ...props }) => {
  const dispatch = useDispatch();
  return (
    <Card
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      pb='25px'
    >
      <Box width='100%' height='100px' position='relative'>
        <Image
          style={{ objectFit: "cover" }}
          height='100%'
          width='100%'
          alt='Product'
          src={product.urlImage}
        />
        <Box
          position='absolute'
          top={0}
          left={0}
          bg='accent'
          borderBottomRightRadius='10px'
          padding='8px'
        >
          <Label variant='Title' my='3px' fontSize='1rem'>
            ${product.price.toFixed(2)}
          </Label>
        </Box>
      </Box>
      <Box my='10px' display='flex' flexDirection='column' alignItems='center'>
        <Label variant='Title' my='3px'>
          {product.name}
        </Label>

        <Box display='flex' flexDirection='column' alignItems='center'>
          {product?.status === "inProcess" ? (
            <>
              <Label
                variant='Body'
                fontWeight='bold'
                my='5px'
                mb={10}
                textAlign='center'
              >
                Remaining Time:
              </Label>
              <Timer
                initTime={product.createdAt}
                cookingTime={product.cookingTime}
              />
            </>
          ) : product?.status === "dispatched" ? null : (
            <>
              <Label variant='Body' my='5px' mb={10} textAlign='center'>
                Cooking Time:
              </Label>
              <Label variant='Body' fontWeight='bold' fontStyle='italic'>
                {product.cookingTime / 1000} Sec
              </Label>
            </>
          )}
        </Box>
      </Box>

      {!product?.status && (
        <Button
          onClick={(e) => {
            e.preventDefault();
            dispatch(productStatusHandler(product));
          }}
        >
          <Label variant='Title' fontSize='14px'>
            Select
          </Label>
        </Button>
      )}
    </Card>
  );
};

export default Product;
