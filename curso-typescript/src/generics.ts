const returnValue = <T>(value: T): T => value;

const message = returnValue<string>("Hello World");
const count = returnValue<number>(5);

function getFirstValueFromArray<Type>(array: Type[]): Type {
  return array[0];
}

const firstValueFromStringArray = getFirstValueFromArray<string>(["1", "2"]);
const firstValueFromNumberArray = getFirstValueFromArray<number>([10, 20]);

const returnPromise = async (): Promise<string> => {
  return "5";
};


class GenericNumber {}
