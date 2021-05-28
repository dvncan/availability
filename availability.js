function action(bp: typeof sdk, event: sdk.IO.IncomingEvent, args: any, { user, temp, session } = event.state) {
  /** Your code starts below */

  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   * @param {string} name - An example string variable
   * @param {any} value - Another Example value
   */

  const axios = require('axios')

  const myAction = async (name, value) => {
    const config = await bp.http.getAxiosConfigForBot(event.botId, { localUrl: true })
    //bp.logger.info(JSON.stringify(config, null, 2))
    const res = await axios.get('/mod/hitlnext/agents', config)
    //bp.logger.info(JSON.stringify(res.data, null, 2))
    //bp.logger.info(res.data.some(x => x.online))

    event.state.temp.onlineAgents = res.data.some(x => x.online)
  }

  return myAction(args.name, args.value)

  /** Your code ends here */
}