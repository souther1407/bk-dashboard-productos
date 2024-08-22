import { param, body } from "express-validator";

export const validateCreateProductos = async (req, res, next) => {
  const validators = [
    body("titulo").exists(),
    body("descripcion").exists(),
    body("categorias").exists().isArray(),
    body("cantidad").exists().isInt({ gt: -1 }).toInt(),
    body("precioUnitario").exists().isNumeric().isFloat({ gt: 0 }),
    body("imgs").exists().isArray(),
  ];
  for (let v of validators) {
    const result = await v.run(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  }

  next();
};

export const validateUpdateProductos = async (req, res, next) => {
  const validators = [param("id").exists().isInt().toInt()];
  for (let v of validators) {
    const result = await v.run(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  }

  next();
};
export const validateDeleteProductos = async (req, res, next) => {
  const validators = [param("id").exists().isInt().toInt()];
  for (let v of validators) {
    const result = await v.run(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ errors: result.array() });
    }
  }

  next();
};
