function ErrorFallback({ resetErrorBoundary }) {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center font-barlow text-zinc-800">
      <h1>Something went wrong</h1>
      {/* <p>{error.message}</p> */}
      <button onClick={resetErrorBoundary}>Back to home</button>
    </div>
  );
}

export default ErrorFallback;
