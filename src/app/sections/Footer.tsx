export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex w-full px-4 py-5 md:px-44 md:py-10 justify-center">
      <p>© {year} Mobaraq Camar. All rights reserved.</p>
    </div>
  );
}
