import { Domain, User } from 'interfaces'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

export const sampleDomainData: Domain[] = [
  { id: 1, domainName: "domogo.algo", address: "addr1"},
  { id: 2, domainName: "matej.algo", address: "addr2"},
  { id: 3, domainName: "sebo.algo", address: "addr3"},
  { id: 4, domainName: "shosha.algo", address: "addr4"},
]
