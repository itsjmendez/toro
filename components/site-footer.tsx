import { Separator } from './ui/separator';

const SiteFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <Separator />
      <div className="container">
        <div className="flex justify-between items-center border-x py-10 px-6">
          <div>
            <p>&copy; {currentYear} Toro Marketing</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
