import React from "react";
import { useDispatch } from "react-redux";

import { Box, Label } from "../components/common";
import { Product } from "../components";
import Spinner from "../components/Spinner/Spinner";

const VendingStateContainer = ({
  label,
  data,
  loading = false,
  children,
  ...props
}) => {
  const dispatch = useDispatch();

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      height='100%'
      width='100%'
      py='10x'
      // {...props}
    >
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box color='white' width='100%' my='15px'>
          <Label variant='Title' style={{ textTransform: "uppercase" }}>
            {label}
          </Label>
        </Box>
      </Box>
      {loading ? (
        <Box
          {...props}
          display='flex'
          overflow='auto'
          height={data?.length === 0 ? "33.3%" : "auto"}
          justifyContent='center'
          alignItems='center'
          width='100%'
          border='5px solid white'
          borderRadius='10px'
          padding='15px'
        >
          <Spinner />
        </Box>
      ) : (
        <>
          <Box
            {...props}
            display='flex'
            overflow='auto'
            height={data?.length === 0 ? "33.3%" : "auto"}
            width='100%'
            border='5px solid white'
            borderRadius='10px'
            padding='15px'
          >
            <Box display='flex' px='15px'>
              {data?.map((item, index) => {
                return (
                  <Product
                    key={item.id}
                    product={item}
                    dispatch={dispatch}
                    index={index}
                    dataLength={data.length}
                  />
                );
              })}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default VendingStateContainer;
