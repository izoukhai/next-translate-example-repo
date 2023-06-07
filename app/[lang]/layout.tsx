const Layout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) => {
  return (
    <html lang={lang}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
