import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from ".";

describe("Componente: SelectList", () => {
  it("should be return city details selected", () => {
    const data = [
      {
        id: "1",
        name: "Campinas",
        longitude: 123,
        latitude: 456,
      },
      {
        id: "2",
        name: "Campo Grande",
        longitude: 789,
        latitude: 987,
      },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campinas/i);
    fireEvent.press(selectedCity);

    expect(onPress).toHaveBeenCalledTimes(1); // Testando se foi chamado, pelo menos 1 vez
    expect(onPress).toHaveBeenCalledWith(data[0]); // Testando se a informação passada no onPress foi a correta
  });

  it("should be show options when data props is empty", () => {
    render(
      <SelectList 
        data={[]} 
        onChange={() => {}} 
        onPress={() => {}} 
      />
    );

    const options = screen.getByTestId("options");
    
    expect(options.children).toHaveLength(0);
  });
});
