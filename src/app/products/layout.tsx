type Props = {
  modal: React.ReactNode
  children: React.ReactNode
}

export default function ProductLayout({children,modal}: Props) {
  return (
    <section className="h-full">
      {modal}
      {children}
    </section>
  );
}
