// JavaScript Program to Validate IP Address
// Input : queryIP = "172.16.254.1"
// Output : "IPv4"

 class IPAddressValidator 
{
  constructor(queryIP) 
  {
    this.queryIP = queryIP;
  }
  validateIPAddress() 
  {
    if (this.isValidIPv4()) 
    {
      return "IPv4";
    } 
    else if (this.isValidIPv6()) 
    {
      return "IPv6";
    } 
    else 
    {
      return "Neither";
    }
  }
  isValidIPv4() 
  {
    const parts = this.queryIP.split('.');
    if (parts.length !== 4) 
      return false;
    for (let part of parts) 
    {
      if (!/^\d+$/.test(part))        // RegEx : test()- tests whether it is there or not
        return false;
      if (part.length > 1 && part[0] === '0')  // No leading zeros
        return false;                            
      const num = Number(part);
      if (num < 0 || num > 255)        
        return false;
    }
    return true;
  }
  isValidIPv6() 
  {
    const parts = this.queryIP.split(':');
    if (parts.length !== 8) 
      return false;
    const hexRegex = /^[0-9a-fA-F]{1,4}$/;     //hexRegex
    for (let part of parts) 
    {
      if (!hexRegex.test(part))                // Should not hexRegex
      return false;
    }
    return true;
  }
}
// Example usage:
const ip1 = new IPAddressValidator("192.168.1.1");
console.log(ip1.validateIPAddress());  // "IPv4"

const ip2 = new IPAddressValidator("2001:db8:85a3:0:0:8A2E:0370:7334");
console.log(ip2.validateIPAddress());  // "IPv6"

const ip3 = new IPAddressValidator("192.168.01.1");
console.log(ip3.validateIPAddress());  // "Neither"