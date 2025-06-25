export const AcademicTimeLine = () => {
  return (
    <div className="container bg-transparent mx-auto w-full h-full overflow-x-hidden">
      <div className="relative wrap overflow-hidden px-4 md:px-10 py-10 md:before:absolute md:before:content-[''] md:before:w-1 md:before:bg-black md:dark:before:bg-white md:before:h-full md:before:left-1/2 md:before:transform md:before:-translate-x-1/2">

        {/* Bloco 1 - SENAI */}
        <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4 md:gap-0">
          <div className="hidden md:block order-1 w-5/12"></div>

          <div className="font-poppins z-20 flex items-center justify-center order-1 bg-black dark:bg-white shadow-xl w-10 h-10 rounded-full self-center md:self-auto">
            <h1 className="text-white dark:text-black font-semibold text-lg">1</h1>
          </div>

          <div
            data-aos="fade-right"
            className="order-1 bg-white dark:bg-[#262626] rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 flex flex-col items-center text-center gap-4"
          >
            <img
              className="rounded-xl max-w-[80px] h-auto"
              src="/images/senai-logo.jpg"
              alt="Logo do Senai"
            />
            <div className="font-poppins flex flex-col">
              <h1 className="font-bold text-black dark:text-white">( 2023 - 2024 )</h1>
              <h3 className="font-bold text-black dark:text-white text-xl">
                SENAI de Informática
              </h3>
              <h5 className="text-lg leading-snug tracking-wide text-gray-700 dark:text-gray-400">
                Técnico em Desenvolvimento de Sistemas
              </h5>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                O curso técnico em Desenvolvimento de Sistemas do SENAI São Paulo capacita profissionais para atuar na análise, desenvolvimento, testes e implantação de sistemas computacionais. O currículo abrange desde fundamentos de programação até práticas avançadas, com foco em qualidade, segurança e usabilidade. Com uma carga horária total de 1.200 horas, o curso prepara os alunos para atender às demandas do mercado de tecnologia da informação.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco 2 - FAM */}
        <div className="mb-10 flex flex-col md:flex-row md:justify-between md:items-center w-full gap-4 md:gap-0">
          <div
            data-aos="fade-left"
            className="order-1 bg-white dark:bg-[#262626] rounded-2xl shadow-xl w-full md:w-5/12 px-4 py-4 flex flex-col items-center text-center gap-4"
          >
            <img
              className="rounded-xl max-w-[80px] h-auto"
              src="/images/fam-logo.png"
              alt="Logo da FAM"
            />
            <div className="font-poppins flex flex-col">
              <h1 className="font-bold text-black dark:text-white">( 2025 - 2028 )</h1>
              <h3 className="font-bold text-black dark:text-white text-xl">
                Centro Universitário FAM
              </h3>
              <h5 className="text-lg leading-snug tracking-wide text-gray-700 dark:text-gray-400">
                Graduação em Ciências da Computação
              </h5>
              <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
                O curso forma profissionais capacitados a projetar, implementar e gerenciar sistemas de software, com ênfase em programação, bancos de dados relacionais e não relacionais, além de práticas de DevOps e testes automatizados. Os alunos aprendem metodologias ágeis, como Scrum e Kanban, e desenvolvem habilidades para trabalhar em equipe por meio de projetos colaborativos, code reviews e pair programming. A formação integra teoria e prática para criar soluções tecnológicas escaláveis e alinhadas às demandas do mercado.
              </p>
            </div>
          </div>

          <div className="font-poppins z-20 flex items-center justify-center order-1 bg-black dark:bg-white shadow-xl w-10 h-10 rounded-full self-center md:self-auto">
            <h1 className="text-white dark:text-black font-semibold text-lg">2</h1>
          </div>

          <div className="hidden md:block order-1 w-5/12"></div>
        </div>

      </div>
    </div>
  );
};
