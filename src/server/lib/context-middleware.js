const defaultContext = {
  stage: 'local',
  resourceBase: '',
  assetBase: ''
};

export default (req, res, next) => {

  let stageContext;
  const apiGatewayEventHeader = req.headers['x-apigateway-event']
  if (apiGatewayEventHeader) {
    try {
      stageContext = JSON.parse(apiGatewayEventHeader).stageVariables;
    } catch (e) {}
  }

  res.locals.stageContext = stageContext || defaultContext;

  next();
}
