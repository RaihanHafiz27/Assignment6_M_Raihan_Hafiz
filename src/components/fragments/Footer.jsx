export const Footer = () => {
  return (
    <footer className="py-10 text-gray-900 dark:text-slate-200">
      <div className="container w-4/5 mx-auto">
        {/* Bagian Atas Footer */}
        <div className="flex justify-between mb-8">
          {/* Tentang Kami */}
          <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
            <h2 className="mb-4 text-lg font-semibold">Tentang Kami</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Kami adalah penyedia layanan terbaik untuk membantu Anda
              mendapatkan yang terbaik. Nikmati pengalaman terbaik bersama kami.
            </p>
          </div>

          {/* Layanan */}
          <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
            <h2 className="mb-4 text-lg font-semibold">Layanan</h2>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Layanan 1
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Layanan 2
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Layanan 3
                </a>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
            <h2 className="mb-4 text-lg font-semibold">Kontak Kami</h2>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>Email: info@website.com</li>
              <li>Telepon: +62 123 456 789</li>
              <li>Alamat: Jl. Raya Nomor 10</li>
            </ul>
          </div>

          {/* Media Sosial */}
          <div className="w-full mb-6 sm:w-1/2 md:w-1/4">
            <h2 className="mb-4 text-lg font-semibold">Ikuti Kami</h2>
            <div className="flex flex-col text-gray-500 dark:text-gray-400">
              <a href="#" className=" hover:text-white">
                Facebook
              </a>
              <a href="#" className=" hover:text-white">
                Twitter
              </a>
              <a href="#" className=" hover:text-white">
                Instagram
              </a>
              <a href="#" className=" hover:text-white">
                linkedin
              </a>
            </div>
          </div>
        </div>

        {/* Bagian Bawah Footer */}
        <div className="pt-4 text-sm text-center text-gray-500 border-t border-gray-700">
          © 2024 Nama Perusahaan. Semua hak dilindungi.
        </div>
      </div>
    </footer>
  );
};
