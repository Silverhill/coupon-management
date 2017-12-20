import path from 'path';

export function renderHome(req, res) {
  res.sendFile(path.join(__dirname, '../../client/index.html'));
}
