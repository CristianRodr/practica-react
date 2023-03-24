describe("Pruebas en <DemoComponent />", () => {
  //! <--se escribe desc
  //! Poner titulos por si quieres hacerlo
  test("Esta prueba no debe de fallar", () => {
    //? 1. inicializacion
    const message1 = "Hola Mundo";

    //? 2. Estimulo
    const message2 = message1.trim();

    //? 3. Observar el comportamiento...esperado JEST
    //? Quiere decir message1 si es igual a message2
    expect(message1).toBe(message2);
  });
});
