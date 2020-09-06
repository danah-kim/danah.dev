export function isFunction(obj: any) {
  // tslint:disable-next-line:triple-equals
  return typeof obj == 'function' || false;
}

export function isObject(obj: any) {
  const type = typeof obj;

  return type === 'function' || (type === 'object' && !!obj);
}
