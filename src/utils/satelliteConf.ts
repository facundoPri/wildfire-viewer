export enum Confidence {
  Procesado = "Procesado",
  Saturado = "Saturado",
  ContaminadoPorNubes = "Contaminado por nubes",
  ProbabilidadAlta = "Probabilidad alta",
  ProbabilidadMedia = "Probabilidad media",
  ProbabilidadBaja = "Probabilidad baja",
}

export const GOESConfidence: { [key: number]: Confidence } = {
  10: Confidence.Procesado,
  30: Confidence.Procesado,
  11: Confidence.Saturado,
  31: Confidence.Saturado,
  12: Confidence.ContaminadoPorNubes,
  32: Confidence.ContaminadoPorNubes,
  13: Confidence.ProbabilidadAlta,
  33: Confidence.ProbabilidadAlta,
  14: Confidence.ProbabilidadMedia,
  34: Confidence.ProbabilidadMedia,
  15: Confidence.ProbabilidadBaja,
  35: Confidence.ProbabilidadBaja,
};

export const VIIRSConfidence: { [key: number]: Confidence } = {
  20: Confidence.ProbabilidadBaja,
  50: Confidence.ProbabilidadMedia,
  90: Confidence.ProbabilidadAlta,
};

export const defaultConfidenceValues: Confidence[] = [
  Confidence.ProbabilidadAlta,
  Confidence.ProbabilidadMedia,
  Confidence.ProbabilidadBaja,
];

export const satelliteCustomConfidence: {
  [key: string]: { [key: number]: Confidence };
} = {
  "viirs soumi npp": VIIRSConfidence,
  "viirs noaa-20": VIIRSConfidence,
  "noaa-goes16": GOESConfidence,
  "noaa-goes17": GOESConfidence,
};

export const colorCodes: { [key in Confidence]: string } = {
  [Confidence.Procesado]: "#6b1318",
  [Confidence.Saturado]: "#d1322a",
  [Confidence.ProbabilidadAlta]: "#d3322a",
  [Confidence.ProbabilidadMedia]: "#d05b02",
  [Confidence.ProbabilidadBaja]: "#fab51f",
  [Confidence.ContaminadoPorNubes]: "#8699a7",
};

export const defaultConfidence = Confidence.Procesado;

export const getSatelliteConfidence = (sat: string, conf: number) => {
  let confidence: Confidence = defaultConfidence;
  if (satelliteCustomConfidence[sat] && satelliteCustomConfidence[sat][conf]) {
    confidence = satelliteCustomConfidence[sat][conf];
  } else {
    const defaultConfidences = defaultConfidenceValues;
    const maxConf = 100;
    const confidenceIndex =
      Math.ceil((conf * defaultConfidences.length) / maxConf) - 1; // Adjust index to be zero-based
    confidence = defaultConfidences[confidenceIndex];
  }

  return confidence;
};

export const getSatelliteColor = (sat: string, conf: number) => {
  return colorCodes[getSatelliteConfidence(sat, conf)];
};
