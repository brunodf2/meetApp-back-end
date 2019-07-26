import Meetup from '../models/Meetup';

class OrganizingController {
  async index(req, res) {
    const meetup = await Meetup.findAll({ where: { user_id: req.userId } });

    return res.json(meetup);
  }
}

export default new OrganizingController();
