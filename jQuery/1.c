//  binarySearch(arr, x, low, high)
//         repeat till low = high
//                mid = (low + high)/2
//                    if (x == arr[mid])
//                    return mid

//                    else if (x > arr[mid]) // x is on the right side
//                        low = mid + 1

//                    else                  // x is on the left side
//                        high = mid - 1
#include <stdio.h>

int bs(int arr[], int x, int low, int high)
{
    while (low<high)
    {
        int mid = (low + high) / 2;
        if (x == arr[mid])
        {
            return mid;
        }
        else if (x > arr[mid])
        {
            low = mid + 1;
        }
        else
        {
            high = mid - 1;
        }
    }
    return -1;
}
int main()
{
    int size;
    printf("enter size of array:");
    scanf("%d", &size);
    int arr[size];
    printf("enter elements:");
    for (int i = 0; i < size; i++)
    {
        scanf("%d", &arr[i]);
    }
    int element;
    printf("enter element to be found:");
    scanf("%d", &element);
    int low = arr[0];
    int high = arr[size - 1];
    int a = bs(arr, element, low, high);
    (a == -1) ? printf("element not found") : printf("element found at position %d", a);
    return 0;
}