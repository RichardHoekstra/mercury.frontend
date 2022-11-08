export type inferElementType<ArrType> =
  ArrType extends readonly (infer ElementType)[] ? ElementType : never;
