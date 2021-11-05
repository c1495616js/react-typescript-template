const reportWebVitals = (onPerfEntry) => {
  if (
    process.env.NODE_ENV === 'development' &&
    onPerfEntry &&
    onPerfEntry instanceof Function
  ) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
