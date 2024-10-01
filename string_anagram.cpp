#include <iostream>
#include <bits/stdc++.h>
using namespace std;

int countOccurence(string str)
{
    unordered_map<char,int> mp;
    for(int i=0;i<str.size();i++)
    {
        mp[str[i]]++;
    }
    
    return mp.size();

}

int main()
{
    string str;
    cin>>str;

    int n = str.length();
    int maxcost = 0;

    for(int i = 0; i < n; i++)
    {
        if(i != n - 1)
        {

        string left = str.substr(0,i+1);
        string right = str.substr(i+1,n);
        //cout<<left<< " " << right << endl;
        int leftcost = countOccurence(left);
        int rightcost = countOccurence(right);
        int sum = leftcost + rightcost;
        maxcost = max(maxcost,sum);

        }
    }

    cout << (n - maxcost);
    return 0;
}