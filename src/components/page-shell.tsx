type PageShellProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <div className="bg-white py-8 sm:py-16">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-4 sm:px-0 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
