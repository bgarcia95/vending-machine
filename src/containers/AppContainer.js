import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Box } from "../components/common";
import { fetchProductsAsync } from "../redux/slices/productsSlice";
import VendingStateContainer from "./VendingStateContainer";

const AppContainer = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const getProducts = useCallback(() => {
    setLoading(true);
    dispatch(fetchProductsAsync()).then(() => {
      setLoading(false);
    });
  }, [dispatch, setLoading]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const products = useSelector((state) => state.vendingMachine.stockProducts);

  const productsInProcess = useSelector(
    (state) => state.vendingMachine.productsInProcess
  );

  const productsDispatched = useSelector(
    (state) => state.vendingMachine.productsDispatched
  );

  return (
    <Box
      display='flex'
      flexDirection='column'
      width='100%'
      height='100%'
      backgroundImage='linear-gradient(315deg, #bdc3c7 0%, #2c3e50 74%)'
      backgroundSize='cover'
      flex={1}
      px='10px'
      pb='20px'
    >
      <VendingStateContainer
        label='Vending Products'
        loading={loading}
        data={products}
        minHeight='33vh'
      />
      <VendingStateContainer
        label={`In Process -> ${productsInProcess?.length}`}
        data={productsInProcess}
        alignItems='center'
        minHeight='33vh'
        // style={{ whiteSpace: "nowrap" }}
      />
      <VendingStateContainer
        label={`Dispatched -> ${productsDispatched?.length}`}
        data={productsDispatched}
        alignItems='center'
        minHeight='33vh'
        // style={{ whiteSpace: "nowrap" }}
      />
    </Box>
  );
};

export default AppContainer;
