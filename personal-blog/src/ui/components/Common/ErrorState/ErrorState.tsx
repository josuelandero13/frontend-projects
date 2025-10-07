interface ErrorStateProps {
  error: Error;
  message?: string;
}

export function ErrorState({
  error,
  message = 'Ha ocurrido un error',
}: ErrorStateProps) {
  return (
    <div className="text-center text-red-600">
      <p className="font-medium">{message}</p>
      {error?.message && (
        <p className="text-sm mt-2">Detalles: {error.message}</p>
      )}
    </div>
  );
}
